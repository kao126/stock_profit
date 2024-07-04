'use client';
import { Container, Heading } from '@radix-ui/themes';
import React from 'react';
import { Chart } from 'react-google-charts';
export const data = [
  ['Location', 'Parent', 'Estimate', 'Market increase/decrease (color)'],
import { BackBtn } from '@/components/common/backBtn';
  ['Stock', null, 0, 0],
  ['America', 'Stock', 10, 0],
  ['Europe', 'Stock', 8, 0],
  ['Asia', 'Stock', 5, 0],
  ['Australia', 'Stock', 3, 0],
  ['Africa', 'Stock', 1, 0],
  // ['Brazil', 'America', 11, 10],
  // ['USA', 'America', 52, 31],
  // ['Mexico', 'America', 24, 12],
  // ['Canada', 'America', 16, -23],
  // ['France', 'Europe', 42, -11],
  // ['Germany', 'Europe', 31, -2],
  // ['Sweden', 'Europe', 22, -13],
  // ['Italy', 'Europe', 17, 4],
  // ['UK', 'Europe', 21, -5],
  // ['China', 'Asia', 36, 4],
  // ['Japan', 'Asia', 20, -12],
  // ['India', 'Asia', 40, 63],
  // ['Laos', 'Asia', 4, 34],
  // ['Mongolia', 'Asia', 1, -5],
  // ['Israel', 'Asia', 12, 24],
  // ['Iran', 'Asia', 18, 13],
  // ['Pakistan', 'Asia', 11, -52],
  // ['Egypt', 'Africa', 21, 0],
  // ['S. Africa', 'Africa', 30, 43],
  // ['Sudan', 'Africa', 12, 2],
  // ['Congo', 'Africa', 10, 12],
  // ['Zaire', 'Africa', 8, 10],
];

// export const options = {
//   minColor: '#f00',
//   midColor: '#ddd',
//   maxColor: '#0d0',
//   headerHeight: 15,
//   fontColor: 'black',
//   showScale: true,
// };

export default function TreeMap() {
  return (
    <Container py={'4'}>
      <Heading as="h1" mb={'2'} size={'7'} align="center">
        Tree Map
      </Heading>

      <Chart
        chartType="TreeMap"
        width="100%"
        height="400px"
        data={data}
        // options={options}
      />
      <BackBtn />
    </Container>
  );
}
