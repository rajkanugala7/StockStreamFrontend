import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../src/landing_page/home/Hero';



describe("Hero Component", () => {
    test("render Hero Image", () => {
        render(<Hero/>);
        const HeroImage = screen.getByAltText("Hero image");
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute("src", "media/images/landing.png");
    } )
    })
