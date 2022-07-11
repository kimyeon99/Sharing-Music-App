import { Avatar,Grid,GridItem, HStack, Image, VisuallyHidden, Button,Center, VisuallyHiddenInput, Divider,Icon, Input, Stack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'


const Header = () => {
    return(
        <div className="Header" >
            <br/>
            
            <Grid templateColumns='repeat(5, 1fr)' gap={4} bg={'black'}>
                <GridItem colStart={2} colEnd={5}>
                    <Input
                        // isInvali
                        errorBorderColor='red.300'
                        placeholder='Here is a sample placeholder'
                        size='lg'
                        htmlSize={50}
                        width='auto'
                    />
                    <Button colorScheme='blue'>Button</Button>
                </GridItem>
                <GridItem colStart={5} colEnd={6} h='10' bg='papayawhip'>
                    <Avatar src='https://bit.ly/broken-link' />
                </GridItem>
            </Grid>

            <br/>
            <Divider orientation='horizontal'/>
            dsasd

        </div>
    )
}

export default Header;