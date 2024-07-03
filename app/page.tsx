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
    </main>
  );
}
