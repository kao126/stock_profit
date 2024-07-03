'use client';
import React, { useEffect, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import {
  Box,
  Container,
  Card,
  Flex,
  Heading,
  Text,
  Separator,
} from '@radix-ui/themes';

export default function Calculator() {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(price * amount);
  }, [price, amount]);
  return (
    <Box maxWidth="600px" className="mx-auto">
      <Card my={'7'} variant="classic" size={'4'} style={{ borderRadius: '0' }}>
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
                      onChange={(e) => setPrice(Number(e.target.value))}
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
                      onChange={(e) => setAmount(Number(e.target.value))}
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Field name="taxRate">
                  <Form.Label className="text-[15px] font-medium leading-[35px]">
                    taxRate
                  </Form.Label>
                  <Form.Control asChild>
                    <input
                      className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                      type="number"
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
            <Box mt={'5'} className="bg-white text-center">
              <Heading as="h2" size={'5'} align="center">
                Estimated Profit
              </Heading>
              <Separator
                orientation="horizontal"
                size="3"
                className="mx-auto my-3"
              />
              <Text size={'9'} trim={'both'} className="inline-block">
                {new Intl.NumberFormat('ja-JP', {
                  style: 'currency',
                  currency: 'JPY',
                }).format(number)}
              </Text>
            </Box>
          </Flex>
        </Container>
      </Card>
    </Box>
  );
}
