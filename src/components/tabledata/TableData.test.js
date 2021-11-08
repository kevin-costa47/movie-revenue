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

    it('should render the TableData Component correctly', () => {
        let wrapped = mount(renderWithContext(<TableData/>, context));
        expect(wrapped).toMatchSnapshot();
    });



     it('should render null if has not Shops', () => {
        const newContext = {
            ...context,
            movies: []
        };
        let wrapped = shallow(renderWithContext(<TableData/>, newContext));

        expect(wrapped).toEqual({});
    });
});
