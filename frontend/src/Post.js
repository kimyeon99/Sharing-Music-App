import {   Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button, useDisclosure, Image, Box,Text, Center, HStack, VStack } from '@chakra-ui/react';

const Post = () => {

    function VerticallyCenter() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <br/>
            <br/>
            <Box boxSize='220px' bg={'red.500'} borderWidth="1px" cursor="pointer">
            <VStack h={200} justify='center' bg='orange' onClick={onOpen} hover>
            <Image boxSize='150px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            <Text fontSize='2xl'>하이 ㅋㅋ</Text>
            {/* <Button onClick={onOpen}>Trigger modal</Button> */}

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  asdjajaiwodqajoiwdadhoiasiodsahoi
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            </VStack>
            </Box>
          </>
        )
      }

    return(
        <div className='post'>
            <Box boxSize='220px' bg={'blue.500'}>
                    <VerticallyCenter></VerticallyCenter>
                    
            </Box>
        </div>
    )
}

export default Post;