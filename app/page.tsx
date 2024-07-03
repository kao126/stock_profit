import React from 'react';
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
  return (
    <main>
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
      <Container py={'4'}>
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
            </Accordion.AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </Container>
    </main>
  );
}
