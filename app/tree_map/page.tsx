'use client';
import { Container, Heading } from '@radix-ui/themes';
import React from 'react';
import { Chart } from 'react-google-charts';
import { BackBtn } from '@/components/common/backBtn';

export const stockData = [
  ['Location', 'Parent', 'Estimated value', 'Market increase/decrease (color)'],
  ['Stock', null, 0, 0],
  ['トヨタ', 'Stock', 10, 10],
  ['三菱商事', 'Stock', 8, 8],
  ['ファーストリテイリング', 'Stock', 5, 5],
  ['レーザーテック', 'Stock', 3, 3],
  ['NTT', 'Stock', 1, 1],
];

export const options = {
  minColor: '#f00',
  midColor: '#ddd',
  maxColor: '#0d0',
  headerHeight: 0,
};

export default function TreeMap() {
  return (
    <Container py={'4'}>
      <Heading as="h1" mb={'2'} size={'7'} align="center">
        Tree Map
      </Heading>

      <div className="pointer-events-none">
        <Chart
          chartType="TreeMap"
          width="100%"
          height="400px"
          data={stockData}
          options={options}
        />
      </div>
      <BackBtn />
    </Container>
  );
}
