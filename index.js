import React, { Component } from 'react'; // import from react

import { render, Window, App, Group, Box, Button, TextInput, Text, Menu, MenuItem, Grid, Tab, Spinbox } from 'proton-native'; // import the proton-native components

class BrewBuddy extends Component {
  render() { // all Components must have a render method
    return (
      <App> // you must always include App around everything
        <Menu label="File">
          <Menu.Item>New</Menu.Item>
          <Menu.Item>Open</Menu.Item>
          <Menu.Item>Save</Menu.Item>
          <Menu.Item>Save As</Menu.Item>
          <Menu.Item>Print</Menu.Item>
          <Menu.Item>Quit</Menu.Item>
        </Menu>
        <Menu label="Options">
          <Menu.Item>Toggle darkmode</Menu.Item>
          <Menu.Item>Preferences</Menu.Item>
        </Menu>
        <Menu label="Help">
          <Menu.Item>Help</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <Menu.Item>Visit website</Menu.Item>
        </Menu>
        <Window title="BrewBuddy Tricky Trappist - 6.0.0" size={{w: 1024, h: 768}} menuBar={true}>
          <Group>
            <Box vertical={true} stretchy={true}>  // mainwindow below the menu 
              <Box vertical={false} stretchy={false}> // iconbar on the top 
                <Button>Import</Button>
                <Button>Export</Button>
                <Button>Copy to forum</Button>
                <Button>Copy to HTML</Button>
                <Button>Print checklist</Button>
              </Box>
              <Grid padded={false} stretchy={false}> // three-column grid is the main functionality
                <Box row={0} column={0} stretchy={false} padded={true}> // left column with the list of brews and recipes in two tabs
                  <Tab>
                    <TextInput label="Brews" />
                    <TextInput label="Recipes" />
                  </Tab>
                </Box>
                <Box row={0} column={1} stretchy={true} padded={true}>  // middle column with the actual recipe and brew visible
                  <TextInput >
                    Middle pane
                  </TextInput>
                </Box>
                <Box row={0} column={2} stretchy={false} padded={true}>
                  <Spinbox label="SG" value={1}/>
                  <Spinbox label="Plato" value={1} />
                </Box>
              </Grid>
            </Box>
          </Group>
          </Window>
      </App>
    );
  }
}

render(<BrewBuddy />); // and finally render your main component
