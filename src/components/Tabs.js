import React from 'react'
import { Tab } from 'semantic-ui-react'
import Chrtemp from './Templates/Chrtemp'
import Diwtemp from './Templates/Diwtemp'
import Eastemp from './Templates/Eastemp'
import Haltemp from './Templates/Haltemp'
import Hantemp from './Templates/Hantemp'
import Kwatemp from './Templates/Kwatemp'
import Thantemp from './Templates/Thantemp'
import Valtemp from './Templates/Valtemp'
import './Components.css'


const panes = [
  { menuItem: 'Valentine\'s day', render: () => <Tab.Pane><Valtemp /></Tab.Pane> },
  { menuItem: 'Easter', render: () => <Tab.Pane><Eastemp /></Tab.Pane> },
  { menuItem: 'Halloween', render: () => <Tab.Pane><Haltemp /></Tab.Pane> },
  { menuItem: 'Thanksgiving', render: () => <Tab.Pane><Thantemp /></Tab.Pane> },
  { menuItem: 'Diwali', render: () => <Tab.Pane><Diwtemp /></Tab.Pane> },
  { menuItem: 'Hanukkah', render: () => <Tab.Pane><Hantemp /></Tab.Pane> },
  { menuItem: 'Christmas', render: () => <Tab.Pane><Chrtemp /></Tab.Pane> },
  { menuItem: 'Kwanzaa', render: () => <Tab.Pane><Kwatemp /></Tab.Pane> },
 
]

const TabExampleBasic = () => <Tab menu={{ color:'gray' }} panes={panes} />

export default TabExampleBasic