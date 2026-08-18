import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from './contact';

describe('project inquiry form', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true }) as jest.Mock;
    window.gtag = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete window.gtag;
  });

  test('collects qualifying details and records a successful lead', async () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test Client' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'client@example.com' } });
    fireEvent.change(screen.getByLabelText('Project type'), { target: { value: 'Commercial / Brand Video' } });
    fireEvent.change(screen.getByLabelText('Tell us about your project'), { target: { value: 'A short business profile.' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send Inquiry' }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(window.gtag).toHaveBeenCalledWith('event', 'generate_lead', {
      form_name: 'project-inquiry',
      project_type: 'Commercial / Brand Video',
    }));

    expect(await screen.findByText(/your inquiry has been sent/i)).toBeInTheDocument();
  });

  test('does not record a lead when submission fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false }) as jest.Mock;

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test Client' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'client@example.com' } });
    fireEvent.change(screen.getByLabelText('Project type'), { target: { value: 'Photography' } });
    fireEvent.change(screen.getByLabelText('Tell us about your project'), { target: { value: 'A portrait session.' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send Inquiry' }));

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    expect(window.gtag).not.toHaveBeenCalled();
  });
});
