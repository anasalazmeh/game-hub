import { Box, Grid, GridItem, Show, Flex } from '@chakra-ui/react';
import React from 'react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GanresList from '../components/GanresList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
const HomePage = () => {
    return (<Grid templateAreas={{
            base: `"Main"`,
            lg: ` "Aside Main"`
        }} templateColumns={{
            base: '1fr',
            lg: '250px'
        }}>
            <Show above='lg'>
                <GridItem area='Aside'>
                    <GanresList></GanresList>
                </GridItem>
            </Show>
            <GridItem area='Main'>
                <Box paddingLeft={2}>
                    <GameHeading />
                    <Flex marginBottom={5}>
                        <Box marginRight={5}>
                            <PlatformSelector />
                        </Box>
                        <SortSelector />
                    </Flex>
                </Box>
                <GameGrid></GameGrid>
            </GridItem>
        </Grid>);
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map