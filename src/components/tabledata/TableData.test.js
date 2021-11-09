import React from 'react';
import { shallow, mount } from 'enzyme';
import TableData from './TableData';
import MovieContext from  '../../context/movie/MovieContext';

const renderWithContext = (children, value) => {
    return (
        <MovieContext.Provider value={value}>
            { children }
        </MovieContext.Provider>
    );
};

describe('TableData', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const context = {
    };

    it('should call addProduct', () => {
        const getMoviesData = jest.fn();
        const valuesContext = {
            movies:[{id:1,title:"Movie",rank:1,year:2010,revenue:1000}],
            getMoviesData,
            ...context
        }

        let wrapped = mount(renderWithContext(<TableData/>, valuesContext));
        expect(getMoviesData).toBeCalledTimes(0);
        wrapped.find('button#showInfo').simulate('click');
        expect(getMoviesData).toBeCalledTimes(1);
        expect(wrapped).toMatchSnapshot();
    });

    it('should render the TableData Component correctly', () => {
        let wrapped = mount(renderWithContext(<TableData/>, context));
        expect(wrapped).toMatchSnapshot();
    });

    it('should render null if has not movies', () => {
        const newContext = {
            ...context,
            movies: []
        };
        let wrapped = shallow(renderWithContext(<TableData/>, newContext));
        expect(wrapped).toEqual({});
    });
});
