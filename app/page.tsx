'use client';
import React from 'react';
import * as Form from '@radix-ui/react-form';
import { Box, Container, Table } from '@radix-ui/themes';

export default function Home() {
  return (
    <main>
      <Box>
        <Container size="1">
          <Form.Root className="w-[260px] mx-auto">
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
                  required
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
                  required
                />
              </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
              <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
                Calculate
              </button>
            </Form.Submit>
          </Form.Root>

          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>
                  Estimated Profit
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>2,500円</Table.RowHeaderCell>
                <Table.Cell>100</Table.Cell>
                <Table.Cell>1,500円</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Container>
      </Box>
    </main>
  );
}
