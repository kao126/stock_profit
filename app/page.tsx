'use client';
import React, { useEffect, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import * as Accordion from '@radix-ui/react-accordion';
import {
  Box,
  Container,
  Table,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Separator,
  ChevronDownIcon,
  RadioCards,
  Checkbox,
  DataList,
  Badge,
} from '@radix-ui/themes';
import { ImageCard } from '@/components/card/imageCard';

export default function Home() {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(price * amount);
  }, [price, amount]);

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
                  <Accordion.Root className="" type="single" collapsible>
                    <Accordion.Item value="item-1">
                      <Accordion.Header className="flex">
                        <Accordion.Trigger className="hover:bg-red group flex h-[45px] flex-1 items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none">
                          <Text className="text-[15px] font-medium leading-[35px]">
                            Details
                          </Text>
                          <ChevronDownIcon
                            className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                            aria-hidden
                          />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.AccordionContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <Form.Field name="category">
                          <Form.Label className="text-[15px] font-medium leading-[35px]">
                            category
                          </Form.Label>
                          <Form.Control asChild>
                            <Box>
                              <RadioCards.Root
                                defaultValue="1"
                                columns={{ initial: '1', sm: '3' }}
                              >
                                <RadioCards.Item value="1">
                                  <Flex direction="column" width="100%">
                                    <Text weight="bold">現物取引</Text>
                                    <Text>一般口座</Text>
                                  </Flex>
                                </RadioCards.Item>
                                <RadioCards.Item value="2">
                                  <Flex direction="column" width="100%">
                                    <Text weight="bold">現物取引</Text>
                                    <Text>特定口座</Text>
                                  </Flex>
                                </RadioCards.Item>
                                <RadioCards.Item value="3">
                                  <Flex direction="column" width="100%">
                                    <Text weight="bold">現物取引</Text>
                                    <Text>NISA</Text>
                                  </Flex>
                                </RadioCards.Item>
                                <RadioCards.Item value="4">
                                  <Flex direction="column" width="100%">
                                    <Text weight="bold">信用取引</Text>
                                    <Text>一般口座</Text>
                                  </Flex>
                                </RadioCards.Item>
                                <RadioCards.Item value="5">
                                  <Flex direction="column" width="100%">
                                    <Text weight="bold">信用取引</Text>
                                    <Text>特定口座</Text>
                                  </Flex>
                                </RadioCards.Item>
                              </RadioCards.Root>
                            </Box>
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
                      </Accordion.AccordionContent>
                    </Accordion.Item>
                  </Accordion.Root>
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
      <Container py={'4'}>
        <Heading as="h1" mb={'2'} size={'7'} align="center">
          Comparison
        </Heading>
        <Box>
          <Card size="3">
            <Flex justify="center" align="center" gap="2">
              <DataList.Root>
                <DataList.Item align="center">
                  <DataList.Label minWidth="88px">Status</DataList.Label>
                  <DataList.Value>
                    <Badge color="jade" variant="soft" radius="full">
                      Authorized
                    </Badge>
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
              <Separator orientation="vertical" size="3" />
              <DataList.Root>
                <DataList.Item align="center">
                  <DataList.Label minWidth="88px">Status</DataList.Label>
                  <DataList.Value>
                    <Badge color="jade" variant="soft" radius="full">
                      Authorized
                    </Badge>
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
            </Flex>
          </Card>
        </Box>
      </Container>
      <Container py={'4'}>
        <Heading as="h1" mb={'2'} size={'7'} align="center">
          History
        </Heading>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Estimated Profit</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>
                <Checkbox />
              </Table.RowHeaderCell>
              <Table.RowHeaderCell>
                <Badge color="jade" variant="soft" radius="full">
                  NISA
                </Badge>
              </Table.RowHeaderCell>
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
