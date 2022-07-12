import {   Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,TabPanel,SimpleGrid, useDisclosure, Image, Box,Text, Center, HStack, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Post = () => {

    const [posts,setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);  

    const getData = async () => {
        const res = await axios.get('http://localhost:8000/');
        //res = await fetch('http://localhost:8000/');
        setPosts(res.data);
    }

    useEffect(()=>{
        return () => {
            getData();
        };
    }, []);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);

    function VerticallyCenter(posts) {
        const { isOpen, onOpen, onClose } = useDisclosure();
        console.log('posts' + posts);
        posts.map((item)=>{
        return (
          <>
            <Box height='80px' maxW='250px' boxSize='250px' bg={'red.500'} borderWidth="2px" borderRadius='lg' cursor="pointer">
                <VStack h={200} justify='center' bg='orange' onClick={onOpen} hover="true">
                    <Image boxSize='150px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text fontSize='2xl'>{item.posts.title}</Text>
                    <Button onClick={()=>{console.log(item)}}>Trigger modal</Button>
                </VStack>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{item.posts.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  asdjajaiwodqajoiwdadhoiasiodsahoi
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
        })
      }

    return(
        <div className='post'>

            <SimpleGrid minChildWidth='250px' spacing='50px'>
            {
                <VerticallyCenter posts={currentPosts}></VerticallyCenter>
            }
            </SimpleGrid>
            <Pagination 
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}>
            </Pagination>
        </div>
    )
}

export default Post;