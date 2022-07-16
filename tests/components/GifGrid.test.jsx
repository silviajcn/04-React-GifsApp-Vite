import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import useFetchGifs from '../../src/hooks/useFetchGifs';
//import { Loader } from '../../src/components/Loader';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

    const category = 'Naruto';
    
    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        //expect(screen.get(<Loader />));
        expect(screen.getByText(category));
        //screen.debug();

    });

    test('debe mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Naruto',
                url: 'https://localhost/naruto.jpg'
            },
            {
                id: '123',
                title: 'Sasuke',
                url: 'https://localhost/sasuke.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});