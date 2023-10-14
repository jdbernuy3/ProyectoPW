
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";



const commonStyles = { 
	bgcolor: 'background.paper', 
	m: 1, 
	border: 2, 
	width: '20rem', 
	height: '20rem', 
}; 

 function FormResultados() { 
	return ( 
		<Box style={{ alignSelf: "center" }} textAlign={"center"} sx={{ display: 'flex', justifyContent: 'center' }}> 
			<Box sx={{ ...commonStyles, borderColor: 'grey.500','borderRadius':'5px'}} >
      <Typography >Psychology of Computer Programming</Typography>
        <img inline-block className='h-40 w-40'
         src="https://images.cdn2.buscalibre.com/fit-in/180x180/1f/a6/1fa666e0f93fb0bc63c4c214188f3a46.jpg"

         ></img>
      <Typography >ISBN: 00000</Typography>
      <Typography >Author: 09322633420</Typography>
      <Typography >Editor: Adison</Typography>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full focus:ring-0" >Reservar</button>
        </Box>

			<Box sx={{ ...commonStyles, borderColor: 'grey.500','borderRadius':'5px' }}>
      <Typography >Psychology of Computer Programming</Typography>
        <img inline-block className='h-40 w-40' src="https://images.cdn3.buscalibre.com/fit-in/180x180/f8/78/f878362b2a6c71f5e7125eafff09a82c.jpg"></img>
      <Typography >ISBN: 00000</Typography>
      <Typography >Author: 09322633420</Typography>
      <Typography >Editor: Adison</Typography>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full focus:ring-0" >Reservar</button>
        
        </Box>
			<Box sx={{ ...commonStyles, borderColor: 'grey.500','borderRadius':'5px' }}>
      <Typography >Psychology of Computer Programming</Typography>
        <img inline-block className='h-40 w-40' src="https://images.cdn1.buscalibre.com/fit-in/180x180/b2/4f/b24f5a1c7adddcc154ad324483235c72.jpg"></img>
        <Typography >ISBN: 00000</Typography>
      <Typography >Author: 09322633420</Typography>
      <Typography >Editor: Adison</Typography>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full focus:ring-0" >Reservar</button>
        </Box> 
		
		</Box> 
	); 
  }

  export default FormResultados

  
  /*
  function FormResultados() {
    return (
        <>
        <div>
        


            <div>
         <Box>
         <Typography >Psychology of Computer Programming</Typography>
        <img className='h-10 w-10' src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49420/man-student-emoji-clipart-md.png"></img>
      <Typography >ISBN: 00000</Typography>
      <Typography >Author: 09322633420</Typography>
      <Typography >Editor: Adison</Typography>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full focus:ring-0" >Reservar</button>

    </Box>

        </div>
        <div>
         <Box>
         <Typography >Psychology of Computer Programming</Typography>
        <img className='h-10 w-10' src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/49420/man-student-emoji-clipart-md.png"></img>
      <Typography >ISBN: 00000</Typography>
      <Typography >Author: 09322633420</Typography>
      <Typography >Editor: Adison</Typography>
      <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded-full focus:ring-0" >Reservar</button>

    </Box>

        </div>
        </div>
        </>
    */