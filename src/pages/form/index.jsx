import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  // const phoneRegExp =
  //   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const localStoragePhoneNumber = localStorage.getItem('phoneNumber');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, 'users', localStoragePhoneNumber);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      } finally {
        setLoading(false);
      }
    };
    if (localStoragePhoneNumber) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [localStoragePhoneNumber]);

  const handleFormSubmit = async (values) => {
    try {
      const { name, email } = values;
      const updatedUserData = { name, email }; // Only include the fields you want to update
      const docRef = doc(db, 'users', localStoragePhoneNumber);
      await setDoc(docRef, updatedUserData, { merge: true });
      alert('Document updated successfully!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    email: yup.string().email('Invalid email!').required('Required'),
    contact: yup.string().required('Required'),
    
  });

  return (
    <Box m="20px">
      <Header title="Update Details" subtitle="We know updates can be there!" />

      {!loading && (
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={userData || { contact: localStoragePhoneNumber }}
          validationSchema={checkoutSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label=" Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name || ''}
                  name="firstName"
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: 'span 2' }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email || ''}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: 'span 4' }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={localStoragePhoneNumber || 'XXXX'}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: 'span 4' }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ backgroundColor: 'green', color: 'white', fontSize: '1.2rem' }}
                >
                  Update
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      )}
    </Box>
  );
};

export default Form;
