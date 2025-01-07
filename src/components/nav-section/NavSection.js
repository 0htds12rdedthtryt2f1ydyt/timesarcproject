// // import { List, ListItem, Collapse, Stack, Typography } from '@mui/material';
// // import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// // import { useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';

// // export default function NavSection({ data }) {
// //   const [openDropdown, setOpenDropdown] = useState(null);
// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const handleDropdownToggle = (index) => {
// //     setOpenDropdown(openDropdown === index ? null : index);
// //   };

// //   const handleNavigation = (path, index) => {
// //     navigate(path);
// //     // Ensure only the current dropdown is open if the item has children
// //     if (data[index]?.children) {
// //       setOpenDropdown(index);
// //     } else {
// //       setOpenDropdown(null); // Close all dropdowns if navigating to a non-parent path
// //     }
// //   };

// //   const isActive = (path) => location.pathname.startsWith(path);

// //   return (
// //     <List>
// //       {data.map((item, index) => (
// //         <div key={item.title}>
// //           {/* Main Module */}
// //           <ListItem
// //             button
// //             onClick={() =>
// //               item.children
// //                 ? handleDropdownToggle(index)
// //                 : handleNavigation(item.path, index)
// //             }
// //             sx={{
// //               backgroundColor: isActive(item.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
// //             }}
// //           >
// //             <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} width="100%">
// //               <Stack direction="row" alignItems="center" spacing={2}>
// //                 {item.icon}
// //                 <Typography>{item.title}</Typography>
// //               </Stack>
// //               {/* Arrow Icons */}
// //               {item.children &&
// //                 (openDropdown === index ? <FaChevronUp /> : <FaChevronDown />)}
// //             </Stack>
// //           </ListItem>

// //           {/* Submodules */}
// //           {item.children && (
// //             <Collapse
// //               in={openDropdown === index || isActive(item.path)}
// //               timeout="auto"
// //               unmountOnExit
// //             >
// //               <List component="div" disablePadding>
// //                 {item.children.map((child) => (
// //                   <ListItem
// //                     button
// //                     key={child.title}
// //                     onClick={() => handleNavigation(child.path, index)}
// //                     sx={{
// //                       pl: 7,
// //                       backgroundColor: isActive(child.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
// //                     }}
// //                   >
// //                     <Stack direction="row" alignItems="center" spacing={2}>
// //                       <Typography>{child.title}</Typography>
// //                     </Stack>
// //                   </ListItem>
// //                 ))}
// //               </List>
// //             </Collapse>
// //           )}
// //         </div>
// //       ))}
// //     </List>
// //   );
// // }
// import { List, ListItem, Collapse, Stack, Typography } from '@mui/material';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function NavSection({ data }) {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleDropdownToggle = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   const handleNavigation = (path, index) => {
//     navigate(path);
//     // Ensure only the current dropdown is open if the item has children
//     if (data[index]?.children) {
//       setOpenDropdown(index);
//     } else {
//       setOpenDropdown(null); // Close all dropdowns if navigating to a non-parent path
//     }
//   };

//   const isActive = (path) => location.pathname.startsWith(path);

//   return (
//     <List>
//       {data.map((item, index) => (
//         <div key={item.title}>
//           {/* Main Module */}
//           <ListItem
//             button
//             onClick={() =>
//               item.children
//                 ? handleDropdownToggle(index)
//                 : handleNavigation(item.path, index)
//             }
//             sx={{
//               backgroundColor: isActive(item.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
//               mb: 2,  // Add margin-bottom to increase vertical gap
//             }}
//           >
//             <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} width="100%">
//               <Stack direction="row" alignItems="center" spacing={2}>
//                 {item.icon}
//                 <Typography>{item.title}</Typography>
//               </Stack>
//               {/* Arrow Icons */}
//               {item.children &&
//                 (openDropdown === index ? <FaChevronUp /> : <FaChevronDown />)}
//             </Stack>
//           </ListItem>

//           {/* Submodules */}
//           {item.children && (
//             <Collapse
//               in={openDropdown === index || isActive(item.path)}
//               timeout="auto"
//               unmountOnExit
//             >
//               <List component="div" disablePadding>
//                 {item.children.map((child) => (
//                   <ListItem
//                     button
//                     key={child.title}
//                     onClick={() => handleNavigation(child.path, index)}
//                     sx={{
//                       pl: 7,
//                       backgroundColor: isActive(child.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
//                       mb: 1,  // Add margin-bottom to submodule items as well
//                     }}
//                   >
//                     <Stack direction="row" alignItems="center" spacing={2}>
//                       <Typography>{child.title}</Typography>
//                     </Stack>
//                   </ListItem>
//                 ))}
//               </List>
//             </Collapse>
//           )}
//         </div>
//       ))}
//     </List>
//   );
// }
import { List, ListItem, Collapse, Stack, Typography } from '@mui/material';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavSection({ data }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleNavigation = (path, index) => {
    navigate(path);
    // Ensure only the current dropdown is open if the item has children
    if (data[index]?.children) {
      setOpenDropdown(index);
    } else {
      setOpenDropdown(null); // Close all dropdowns if navigating to a non-parent path
    }
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <List>
      {data.map((item, index) => (
        <div key={item.title}>
          {/* Main Module */}
          <ListItem
            button
            onClick={() =>
              item.children
                ? handleDropdownToggle(index)
                : handleNavigation(item.path, index)
            }
            sx={{
              backgroundColor: isActive(item.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
              mb: 2, // Add margin-bottom to increase vertical gap
            }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} width="100%">
              <Stack direction="row" alignItems="center" spacing={2}>
                {item.icon}
                <Typography>{item.title}</Typography>
              </Stack>
              {/* Arrow Icons */}
              {item.children &&
                (openDropdown === index ? <FaChevronUp /> : <FaChevronDown />)}
            </Stack>
          </ListItem>

          {/* Submodules */}
          {item.children && (
            <Collapse
              in={openDropdown === index || isActive(item.path)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.children.map((child, childIndex) => (
                  <div key={child.title}>
                    <ListItem
                      button
                      onClick={() => handleNavigation(child.path, index)}
                      sx={{
                        pl: 7,
                        backgroundColor: isActive(child.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
                        mb: 1, // Add margin-bottom to submodule items as well
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography>{child.title}</Typography>
                      </Stack>
                    </ListItem>

                    {/* Role Submodules under HR */}
                    {child.title === 'Role' && (
                      <Collapse in={openDropdown === index || isActive(child.path)} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {child.submodules?.map((subItem) => (
                            <ListItem
                              button
                              key={subItem.title}
                              onClick={() => handleNavigation(subItem.path, childIndex)}
                              sx={{
                                pl: 9,
                                backgroundColor: isActive(subItem.path) ? 'rgba(0,0,0,0.08)' : 'transparent',
                                mb: 1,
                              }}
                            >
                              <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography>{subItem.title}</Typography>
                              </Stack>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    )}
                  </div>
                ))}
              </List>
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
}
