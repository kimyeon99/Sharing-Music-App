import { Divider, Image, Center,Button,VStack,Stack,StackDivider,GridItem,Grid,Icon } from '@chakra-ui/react';
import Header from './Header';
import { HamburgerIcon } from '@chakra-ui/icons'
import Post from './Post';
import { useEffect } from 'react';


const Sidebar = () => {

    return(
        <div>
            <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'130px 1100px 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
   <Header/>
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
	                    <VStack 
                    // divider={<StackDivider borderColor='gray.200' />}
                    align='stretch' spacing={4}>
                        <Button>
                            <Icon as={HamburgerIcon} />
                        </Button>
                        <Button>
                            <Image src="img/homepage.png" boxSize="20px"/>
                        </Button>
                        <Button>
                            <Image src="img/compass.png" boxSize="20px"/>
                        </Button>
                        <Button>
                            <Image src="img/compass.png" boxSize="20px"/>
                        </Button>
                        <Button>
                            <Image src="img/compass.png" boxSize="20px"/>
                        </Button>
                    </VStack>
  </GridItem>
  <GridItem  pl='2' bg='green.300' area={'main'} h='1100px'>
	<Post/>
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
</div>
    )
}

export default Sidebar;