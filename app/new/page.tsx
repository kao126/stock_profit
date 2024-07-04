'use client';
import * as Form from '@radix-ui/react-form';
import { Box, Card, Container, Heading, Text } from '@radix-ui/themes';

import { BackBtn } from '@/components/common/backBtn';

export default function New() {
  return (
    <Box maxWidth="600px" className="mx-auto">
      <Card my={'7'} variant="classic" size={'4'} style={{ borderRadius: '0' }}>
        <Container py={'4'}>
          <Heading as="h1" mb={'2'} size={'7'} align="center">
            Registration
          </Heading>
          <Text as="p" size={'4'} align="center">
            Register your hold stock
          </Text>
          <Box>
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
                    // onChange={(e) =>
                    //   // setAcquisitionPrice(Number(e.target.value))
                    // }
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
                    // onChange={(e) =>
                    //   // setAcquisitionAmount(Number(e.target.value))
                    // }
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
                    // onChange={(e) =>
                    //   // setAcquisitionBrokerageCommission(Number(e.target.value))
                    // }
                  />
                </Form.Control>
              </Form.Field>
            </Form.Root>
          </Box>
          <BackBtn />
        </Container>
      </Card>
    </Box>
  );
}
