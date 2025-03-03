import { render, screen, fireEvent } from '@testing-library/react';
import { FoundationsEditor } from '@/components/foundations/foundations-editor';

describe('FoundationsEditor', () => {
  it('renders all sections', () => {
    render(<FoundationsEditor />);

    expect(screen.getByText('Colors')).toBeInTheDocument();
    expect(screen.getByText('Typography')).toBeInTheDocument();
    expect(screen.getByText('Spacing Scale')).toBeInTheDocument();
  });

  it('can add a new color', () => {
    render(<FoundationsEditor />);

    const addButton = screen.getByRole('button', { name: /add color/i });
    fireEvent.click(addButton);

    expect(screen.getAllByText('New Color')).toHaveLength(1);
  });

  it('can edit a color', () => {
    render(<FoundationsEditor />);

    // Click the first color swatch
    fireEvent.click(screen.getByText('Primary Blue'));

    // Edit the color name
    const nameInput = screen.getByRole('textbox', { name: /color name/i });
    fireEvent.change(nameInput, { target: { value: 'Updated Blue' } });

    // Edit the hex value
    const hexInput = screen.getByRole('textbox', { name: /hex code/i });
    fireEvent.change(hexInput, { target: { value: '#0000FF' } });

    // Save changes
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    expect(screen.getByText('Updated Blue')).toBeInTheDocument();
    expect(screen.getByText('#0000FF')).toBeInTheDocument();
  });

  it('can delete a color', () => {
    render(<FoundationsEditor />);

    const initialColorCount = screen.getAllByRole('button', { name: /delete color/i }).length;

    // Delete the first color
    const deleteButton = screen.getAllByRole('button', { name: /delete color/i })[0];
    fireEvent.click(deleteButton);

    const finalColorCount = screen.getAllByRole('button', { name: /delete color/i }).length;
    expect(finalColorCount).toBe(initialColorCount - 1);
  });

  it('can edit typography styles', () => {
    render(<FoundationsEditor />);

    // Click the first typography style
    fireEvent.click(screen.getByText('Heading 1'));

    // Change font family
    const fontSelect = screen.getByRole('combobox', { name: /font family/i });
    fireEvent.click(fontSelect);
    fireEvent.click(screen.getByRole('option', { name: /helvetica/i }));

    // Save changes
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    expect(screen.getByText(/helvetica/i)).toBeInTheDocument();
  });

  it('can edit spacing values', () => {
    render(<FoundationsEditor />);

    // Find and edit the first spacing input
    const spacingInput = screen.getByRole('textbox', { name: /xs/i });
    fireEvent.change(spacingInput, { target: { value: '2rem' } });

    expect(spacingInput).toHaveValue('2rem');
  });
});
