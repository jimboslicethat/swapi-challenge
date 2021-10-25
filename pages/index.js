import Head from 'next/head'
import Link from 'next/link'
import { Flex, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'

export default function Home() {
  const boxProps = {
    bg: 'teal',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '6px',
    height: '5em',
    width: '20em',
    _hover: {
      cursor: 'pointer'
    }
  }

  return (
    <Flex align="center" justifyContent="center" height="100vh" textAlign="center">
      <Head>
        <title>SWAPI Challenge</title>
        <meta name="description" content="A small react sandbox for playing around with the basics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading as="h1" paddingBottom="1em">Hello, there, General Kenobi.</Heading>

        <SimpleGrid columns="2" spacing={10}>
          <Link href="/planets">
            <Box {...boxProps}>
              <a>
                <Heading as="h2">Planets &rarr;</Heading>
                <Text fontSize="xl">Search characters by planet.</Text>
              </a>
            </Box>
          </Link>

          <Link href="/characters">
            <Box {...boxProps}>
              <a>
                <Heading as="h2">Characters &rarr;</Heading>
                <Text fontSize="xl">Search for characters by attributes.</Text>
              </a>
            </Box>
          </Link>

          <Link href="/films">
            <Box {...boxProps}>
              <a>
                <Heading as="h2">Films &rarr;</Heading>
                <Text fontSize="xl">Get info by name, number, or date.</Text>
              </a>
            </Box>
          </Link>

          <Link href="/vehicles">
            <Box {...boxProps}>
              <a>
                <Heading as="h2">Vehicles &rarr;</Heading>
                <Text fontSize="xl">Vroom vroom, beep beep.</Text>
              </a>
            </Box>
          </Link>
        </SimpleGrid>
      </main>
    </Flex>
  )
}
