import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import Header from '../../components/Header/Header'
import bgImg from '../../assets/images/Elephant.jpg'
import AccountCircle from '@mui/icons-material/AccountCircle'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const Login = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          margin: '0 auto',
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative'
        }}
      >
        <Paper
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '250px',
            transform: {
              xs: 'translate(-50%, -41%)',
              sm: 'translate(-50%, -50%)'
            },
            padding: '20px'
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: '100%',
              bgcolor: 'primary.main',
              mt: '-70px',
              padding: '20px',
              boxShadow: 3,
              borderRadius: 1
            }}
          >
            <Typography textAlign="center" color="white">
              Login
            </Typography>
            <Stack spacing={2} direction="row" justifyContent="center">
              <FacebookIcon sx={{ color: 'white' }} />
              <InstagramIcon sx={{ color: 'white' }} />
              <TwitterIcon sx={{ color: 'white' }} />
            </Stack>
          </Stack>

          <Typography textAlign="center" sx={{ my: '20px' }}>
            Or Be Classical
          </Typography>

          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField label="email" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField label="password" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <VerifiedUserIcon
                sx={{ color: 'action.active', mr: 1, my: 0.5 }}
              />
              <TextField label="code" variant="standard" />
            </Box>
          </Stack>

          <Stack spacing={1} sx={{ mt: '20px' }}>
            <Button variant="text" sx={{ fontWeight: 'bold' }}>
              GET STARTED
            </Button>
            <Button variant="text" sx={{ fontWeight: 'bold' }}>
              Sign Up?
            </Button>
          </Stack>
        </Paper>
      </Box>
    </>
  )
}

export default Login
