import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; //extends checking time
import Hero from "../landing_page/home/Hero";

//Test Suite - multiple test cases

describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/homeHero.png");
    });
});