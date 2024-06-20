'use client';
import React from 'react';
import * as Form from '@radix-ui/react-form';
import {
  Box,
  Container,
  Table,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes';
import { ImageCard } from '@/components/card/imageCard';

export default function Home() {
  return (
    <main>
      <Box maxWidth="600px" className="mx-auto">
        <Card
          my={'7'}
          variant="classic"
          size={'4'}
          style={{ borderRadius: '0' }}
        >
          <Container py={'4'}>
            <Flex direction={'column'}>
              <Heading as="h1" mb={'2'} size={'7'} align="center">
                Stock Profit
              </Heading>
              <Text as="p" size={'4'} align="center">
                Calculate profits by stock trading
              </Text>
              <Box mt={'2'}>
                <Form.Root
                  className="w-[300px] mx-auto"
                  onSubmit={(event) => {
                    // handleSubmit();
                    event.preventDefault();
                  }}
                >
                  <Form.Field className="grid mb-[10px]" name="price">
                    <div className="flex items-baseline justify-between">
                      <Form.Label className="text-[15px] font-medium leading-[35px]">
                        Price
                      </Form.Label>
                      <Form.Message
                        className="text-[13px] opacity-[0.8]"
                        match="valueMissing"
                      >
                        Please enter purchase price
                      </Form.Message>
                      <Form.Message
                        className="text-[13px] opacity-[0.8]"
                        match="typeMismatch"
                      >
                        Please provide a valid price
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="number"
                        // required
                      />
                    </Form.Control>
                  </Form.Field>
                  <Form.Field className="grid mb-[10px]" name="amount">
                    <div className="flex items-baseline justify-between">
                      <Form.Label className="text-[15px] font-medium leading-[35px]">
                        Amount
                      </Form.Label>
                      <Form.Message
                        className="text-[13px] opacity-[0.8]"
                        match="valueMissing"
                      >
                        Please enter amount
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="number"
                        // required
                      />
                    </Form.Control>
                  </Form.Field>
                  {/* <Form.Submit asChild>
                  <Box mt={'6'} className="text-center">
                    <Button size={'3'} variant="surface">
                      Calculate
                    </Button>
                  </Box>
                </Form.Submit> */}
                </Form.Root>
              </Box>
            </Flex>
          </Container>
        </Card>
      </Box>
      <Container py={'4'}>
        <Heading as="h1" mb={'2'} size={'7'} align="center">
          History
        </Heading>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Estimated Profit</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>2,500</Table.RowHeaderCell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>1,500</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Container>
      <Container>
        <ImageCard variant="surface" />
        {/* <ImageCard variant="ghost" /> */}
        {/* <ImageCard variant="classic" /> */}
      </Container>
    </main>
  );
}
