import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import Header from '../../components/Header/Header'
import bgImg from '../../assets/images/Elephant.jpg'
import AccountCircle from '@mui/icons-material/AccountCircle'
import VpnKeyIcon from '@mui/icons-material/VpnKey'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { v4 as uuidv4 } from 'uuid'

import { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/_utils'
import { getCode } from '../../api/publicAPI'
import { ISeverAPIResponse } from '../../type.d'
import * as yup from 'yup'
import { useFormik } from 'formik'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'minimum 8 characters length')
    .required('Password is required'),
  code: yup
    .string()
    .min(4, 'minimum 4 characters length')
    .required('Password is required')
})

const Login = () => {
  // * code from server
  const [code, setCode] = useState('')

  const _getCode = () => {
    let sid = getLocalStorage('sid')
    if (!sid) {
      let sid: string
      sid = uuidv4()
      setLocalStorage('sid', sid)
    }
    return getCode(sid).then(resp => {
      const res = resp as any as ISeverAPIResponse
      if (res.code === 200) {
        setCode(res.data)
      }
    })
  }

  useEffect(() => {
    _getCode()
  }, [])

  // * form validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      code: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

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
            width: '300px',
            // height: '500px',
            transform: {
              xs: 'translate(-50%, -41%)',
              sm: 'translate(-50%, -50%)'
            },
            padding: '15px'
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

          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountCircle
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  fullWidth
                  size="small"
                  label="email*"
                  variant="standard"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                  fullWidth
                  size="small"
                  id="password"
                  label="password*"
                  variant="standard"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <VerifiedUserIcon
                  sx={{ color: 'action.active', mr: 1, my: 0.5 }}
                />
                <TextField
                  size="small"
                  id="code"
                  label="code*"
                  variant="standard"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  error={formik.touched.code && Boolean(formik.errors.code)}
                  helperText={formik.touched.code && formik.errors.code}
                />
                <span
                  style={{ width: '110px' }}
                  dangerouslySetInnerHTML={{ __html: code }}
                  onClick={() => {
                    _getCode()
                  }}
                />
              </Box>
            </Stack>

            <Stack spacing={1} sx={{ mt: '20px' }}>
              <Button variant="text" sx={{ fontWeight: 'bold' }} type="submit">
                GET STARTED
              </Button>
              <Button variant="text" sx={{ fontWeight: 'bold' }}>
                Sign Up?
              </Button>
            </Stack>
          </form>
        </Paper>
      </Box>
    </>
  )
}

export default Login
