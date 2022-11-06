import { Button } from '@mui/material'
import React from 'react'

export const OrderDashboard = () => {
  return (
    <div>
        <Button onClick={window.location.href = "/order/"}>Purchase Order</Button>
        <Button onClick={window.location.href = "/"}>Staff Order</Button>
        <Button>Supplier Order</Button>
    </div>
  )
}
