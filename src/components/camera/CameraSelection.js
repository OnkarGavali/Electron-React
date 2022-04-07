import React, {useEffect} from 'react'
import { Dropdown } from '@fluentui/react/lib/Dropdown';
import { Label } from '@fluentui/react/lib/Label';
import {  Stack } from '@fluentui/react/lib/Stack';
import { IconButton } from '@fluentui/react/lib/Button';
import { ThemeProvider } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react';


initializeIcons();

// const exampleOptions = [
//   { key: 'Header', text: 'Options', itemType: DropdownMenuItemType.Header },
//   { key: 'A', text: 'Option a', data: { icon: 'Memo' } },
//   { key: 'B', text: 'Option b', data: { icon: 'Print' } },
//   { key: 'C', text: 'Option c', data: { icon: 'ShoppingCart' } },
//   { key: 'D', text: 'Option d', data: { icon: 'Train' } },
//   { key: 'E', text: 'Option e', data: { icon: 'Repair' } },
//   { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
//   { key: 'Header2', text: 'More options', itemType: DropdownMenuItemType.Header },
//   { key: 'F', text: 'Option f', data: { icon: 'Running' } },
//   { key: 'G', text: 'Option g', data: { icon: 'EmojiNeutral' } },
//   { key: 'H', text: 'Option h', data: { icon: 'ChatInviteFriend' } },
//   { key: 'I', text: 'Option i', data: { icon: 'SecurityGroup' } },
//   { key: 'J', text: 'Option j', data: { icon: 'AddGroup' } },
// ];


const onRenderLabel = (IDropdownProps) => {
  console.log("IDropdownProps",IDropdownProps)
  return (
    <Stack horizontal verticalAlign="center">
      <Label>{IDropdownProps.label }</Label>
      <IconButton
        iconProps={{ iconName: 'Info' }}
        title="Select camera"
        ariaLabel="Info "
        styles={{ root: { marginBottom: -3 } }}
      />
    </Stack>
  );
};




const dropdownStyles = { dropdown: { width: 300 } };



export const CameraSelection = ({devices, setDevice,device,IDropdownProps,IDropdownOption}) => {
  
  // useEffect(() => {
  //   console.log("hi in camerav selction useeffect")
  // }, [device,devices])
  return (
    <ThemeProvider>
       <Dropdown
        placeholder="Select an camera"
        label="Select Camera"
        ariaLabel="camera selection"
        selectedKey={ device===null ? null : (device.key)}
        styles={dropdownStyles}
        options={devices}
        onRenderLabel={onRenderLabel}
        onClick={(e,option)=>console.log("e",e,"option",option,IDropdownOption)}
        onChange={(index,option)=>{
          setDevice(option)
          console.log("hey lets checck camera",option)
      }}
    />
    
    
    </ThemeProvider>
  )
}
