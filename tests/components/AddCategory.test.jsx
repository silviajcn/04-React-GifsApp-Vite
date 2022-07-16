import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas en <AddCategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        // se  crea el sujeto de pruebas
        render(<AddCategory onNewCategory={() => { }} />);
        //screen.debug();

        // se extrae el input
        const input = screen.getByRole('textbox');

        // se dispara el evento
        fireEvent.input(input, { target: { value: 'Naruto' } });

        // se hace la acersion de lo que se espera que suceda despues del evento
        expect(input.value).toBe('Naruto');

    });

    test('debe llaamr onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Naruto';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        //screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('no debe llamar el onnewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });

});