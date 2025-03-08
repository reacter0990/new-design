import React from 'react';
// import Filter from './Filter/Filter';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Logo from "../../assets/photo_2022-11-15_20-14-18-removebg-preview.6adfd6e9c5796d6ba107.png";

const Header = () => {
    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <header className="grow p-4 h-[500px]">
      <div className="relative grow flex justify-between h-full">
        <div className="grow h-full pl-24 flex flex-col justify-center z-10">
          <h6 className="py-1 text-3xl font-bold">Over 1 Million Cars</h6>
          <h6 className="py-1 text-2xl font-bold">Can find favorite here</h6>
          <button
            className="w-[250px] p-3 mt-2 bg-[#fe004a] 
           text-white rounded-lg font-bold shadow-lg cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="grow h-full">
        <div className='min-w-[385px] h-full bg-white shadow-xl rounded-md'>
          <div className='w-full h-[10%] flex'>
            <div className='grow flex justify-center items-center'>
            <svg className="sdOa3" width="40" height="20" viewBox="0 0 96 48" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M54 20c-.036.044 1-9 1-9h14c2 0 8 9 8 9H54zm-26 0l13.357-7.646S44 11 46 11h7s-.968 9.046-1 9H28zm58.5 1.5c-2-2-9.5-8.5-13.134-11.067C72.14 9.568 71 9 69 9H46c-3 0-8 3-8 3l-14 8s-6.5 1.5-10.5 2.5C11.42 23.02 9 25.131 9 27c0 1-.25 1.5-.5 2S8 30 8 31v2c0 2 1 3 3 3h2c0-4.973 4.029-9 9-9a9 9 0 019 9h32c0-4.973 4.029-9 9-9a9 9 0 019 9h5c2 0 3-1 3-3v-2c0-1-.25-1.5-.5-2s-.5-1-.5-2c0-2-.44-4.44-1.5-5.5zM65 36a7 7 0 1114 0 7 7 0 01-14 0zm3 .002A4 4 0 1075.998 36a4 4 0 00-7.998.002zM22 29a7.001 7.001 0 10.002 13.998A7.001 7.001 0 0022 29zm-.001 11a4 4 0 110-7.998A4 4 0 0122 40z" fill="currentColor"></path></svg>
            </div>
            <div className='grow flex justify-center items-center'>
            <svg className="sdOa3" width="40" height="20" viewBox="0 0 96 48" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M88 30V6H26.139v24H88zM11.544 12.91L11 14h13v-4l-10.995 1.833a2 2 0 00-1.46 1.078zM88 32H24V15.147H10.472L6 27.739V39.16L9 41h6.016a7.5 7.5 0 1114.967 0h37.033a7.5 7.5 0 0114.119-4H88v-5zM9.197 26.463L21 24.192l.027-7.121c-.002.032-8.996-.035-8.996-.035l-2.834 9.427zM80 40.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5 0a3 3 0 106 0 3 3 0 00-6 0zm-49 5.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-2.5a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"></path></svg>
            </div>
            <div className='grow flex justify-center items-center'>
            <svg className="sdOa3" width="40" height="20" viewBox="0 0 96 48" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M74 14l-16.458 2.003L55.26 19h-5.184s-.576-3-3.576-4c-2.867-.956-5-1-5-1l-.5-3-3-3s-10.5 3-10.5 8c0 1.5 4.5 3 4.5 3l.51 3.572c.233.078.461.164.687.257l-1.02 1.748A8.978 8.978 0 0029 24a9.001 9.001 0 000 18c4.968 0 9-4.032 9-9a8.98 8.98 0 00-3.233-6.91l1.02-1.747A10.98 10.98 0 0140 33c0 .901-.108 1.777-.313 2.615C41.979 36.373 44.833 37 48 37c3.167 0 6.021-.627 8.313-1.385A11.025 11.025 0 0156 33c0-1.01.136-1.987.39-2.915l1.86.797A9.001 9.001 0 0067 42a9 9 0 10-7.567-13.875l-1.86-.797A10.993 10.993 0 0166.82 22L74.5 17.5 74 14zM62.025 32.5l4.384 1.879a1.5 1.5 0 001.182-2.758l-4.384-1.878A4.986 4.986 0 0166.998 28C69.758 28 72 30.24 72 33.002A5.002 5.002 0 0166.998 38a4.999 4.999 0 01-4.973-5.5zM28.998 28c.382 0 .753.043 1.11.124l-2.404 4.12a1.5 1.5 0 002.592 1.512l2.402-4.119A4.984 4.984 0 0134 33.002 5.002 5.002 0 0128.998 38 4.999 4.999 0 0124 33.002 5.001 5.001 0 0128.998 28z" fill="currentColor"></path></svg>
            </div>
            <div className='grow flex justify-center items-center'>
            <svg className="sdOa3" width="40" height="20" viewBox="0 0 96 48" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M43 37h10V21H43v16zm35-17h4v-8h-4v8zm-16 0h12v-8H62v8zM42 38h12V12H42v26zM32 22l-13 2 5-12h8v10zM16 4s-1 2-1 4 1 4 1 4h5l-5 12s-3 1.5-4 3c-.666 1-1 1.904-1 4 0 1-.25 1.5-.5 2s-.5 1-.5 2v2c0 2 2.552 3 3 3h3a8 8 0 1116 0h28a8 8 0 1116 0h5.62L84 36.598V8c0-4.5-5-4-5-4H16zm14 36a6 6 0 11-12 0 6 6 0 0112 0zm-9 0a3 3 0 106 0 3 3 0 00-6 0zm47 6a6 6 0 100-12 6 6 0 000 12zm0-3a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"></path></svg>
            </div>
          </div>
          <div className='grow pt-3 pl-3 pr-3 h-[75%]'>
            <div className='flex grow'>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
              {/* <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">Mark</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="Mark"
                  onChange={handleChange}
                //   renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">Model</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="Model"
                  onChange={handleChange}
                //   renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl> */}
            </div>
            <div className='flex grow'>
              {/* <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">Max Price</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="Max Price"
                  onChange={handleChange}
                  renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">First Registration</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="First Registration"
                  onChange={handleChange}
                  renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl> */}
            </div>
          <div className='flex grow'>
              {/* <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">Max Range</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="Max Range"
                  onChange={handleChange}
                  renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl>
              <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">Fuel Type</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="Fuel Type"
                  onChange={handleChange}
                  renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl> */}
            </div>
            <div className='flex grow'>
              {/* <FormControl sx={{ m: 1, flexGrow: 1 }} error={false} size='small'>
                <InputLabel id="demo-simple-select-error-label">City/Region</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  value={age}
                  label="City/Region"
                  onChange={handleChange}
                //   renderValue={(value) => `⚠️  - ${value}`}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText style={{ display: 'none' }}>Error</FormHelperText>
              </FormControl> */}
            </div>
            <div className='w-full flex justify-center py-2'>
            <button className='flex justify-center py-3 bg-[#fe004a] font-normal text-white items-center
             w-[80%]'>
               {/* <FiSearch color='#fff' style={{marginRight: 10}}/> */}
                215 025 Results Found
            </button>
            </div>
          </div>
          <div className='grow h-[15%] px-5 pb-2'>
             <button className='w-full h-full bg-[#fe004a] text-white tetx-normal rounded-lg h-[90%]'>
                General Search
             </button>
          </div>
        </div>
        </div>
        <div className="inset-0 absolute flex justify-center items-center z-0">
          <img src={Logo} alt="" className="w-auto h-auto object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
