'use client';
import React, { useEffect, useState } from 'react';
import * as Form from '@radix-ui/react-form';
import {
  Box,
  Container,
  Card,
  Grid,
  Heading,
  Text,
  Separator,
} from '@radix-ui/themes';
import { BackBtn } from '@/components/common/backBtn';

const TAX_RATE = 1 - 0.20315;

export default function Calculator() {
  const [acquisitionPrice, setAcquisitionPrice] = useState(0);
  const [acquisitionAmount, setAcquisitionAmount] = useState(0);
  const [acquisitionBrokerageCommission, setAcquisitionBrokerageCommission] =
    useState(0);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [estimatedAmount, setEstimatedAmount] = useState(0);
  const [estimatedBrokerageCommission, setEstimatedBrokerageCommission] =
    useState(0);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const acquisitionNumber =
      acquisitionPrice * acquisitionAmount + acquisitionBrokerageCommission;
    const estimatedNumber =
      estimatedPrice * estimatedAmount - estimatedBrokerageCommission;
    Boolean(estimatedNumber && acquisitionNumber)
      ? setNumber(estimatedNumber - acquisitionNumber)
      : null;
  }, [
    estimatedPrice,
    estimatedAmount,
    acquisitionPrice,
    acquisitionAmount,
    acquisitionBrokerageCommission,
    estimatedBrokerageCommission,
  ]);

  return (
    <>
      <Box maxWidth="1200px" className="mx-auto">
        <Card
          my={'7'}
          variant="classic"
          size={'4'}
          style={{ borderRadius: '0' }}
        >
          <Container py={'4'}>
            <Heading as="h1" mb={'2'} size={'7'} align="center">
              Stock Profit
            </Heading>
            <Text as="p" size={'4'} align="center">
              Calculate profits by stock trading
            </Text>
            <Grid columns={{ initial: '1', md: '2' }} gap="3" mt={'2'}>
              <Box>
                <Heading as="h2" size={'5'} align="center">
                  Acquisition Cost
                </Heading>
                <Form.Root className="w-[300px] mx-auto">
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
                        onChange={(e) =>
                          setAcquisitionPrice(Number(e.target.value))
                        }
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
                        onChange={(e) =>
                          setAcquisitionAmount(Number(e.target.value))
                        }
                      />
                    </Form.Control>
                  </Form.Field>
                  <Form.Field name="BrokerageCommission">
                    <Form.Label className="text-[15px] font-medium leading-[35px]">
                      Brokerage Commission
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="number"
                        onChange={(e) =>
                          setAcquisitionBrokerageCommission(
                            Number(e.target.value)
                          )
                        }
                      />
                    </Form.Control>
                  </Form.Field>
                </Form.Root>
              </Box>
              <Box>
                <Heading as="h2" size={'5'} align="center">
                  Estimated Value
                </Heading>
                <Form.Root className="w-[300px] mx-auto">
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
                        onChange={(e) =>
                          setEstimatedPrice(Number(e.target.value))
                        }
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
                        onChange={(e) =>
                          setEstimatedAmount(Number(e.target.value))
                        }
                      />
                    </Form.Control>
                  </Form.Field>
                  <Form.Field name="BrokerageCommission">
                    <Form.Label className="text-[15px] font-medium leading-[35px]">
                      Brokerage Commission
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                        className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="number"
                        onChange={(e) =>
                          setEstimatedBrokerageCommission(
                            Number(e.target.value)
                          )
                        }
                      />
                    </Form.Control>
                  </Form.Field>
                </Form.Root>
              </Box>
            </Grid>
          </Container>
        </Card>
      </Box>
      <Box mt={'5'} className="bg-white text-center">
        <Heading as="h2" size={'6'} align="center">
          Estimated Profit <Text size={'4'}>(After-Tax)</Text>
        </Heading>
        <Separator orientation="horizontal" size="3" className="mx-auto my-3" />
        <Text size={'9'} trim={'both'} className="inline-block">
          {new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
          }).format(number)}
        </Text>
        <Text size={'6'} trim={'both'} className="inline-block">
          (
          {new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
          }).format(number * TAX_RATE)}
          )
        </Text>
      </Box>
      <BackBtn />
    </>
  );
}
