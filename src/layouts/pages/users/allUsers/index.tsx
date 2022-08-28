/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from '@mui/material/Card'

// Material Dashboard 2 PRO React TS components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import DataTable from 'examples/Tables/DataTable'

// Data
import dataTableData from './dataTables'
import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import { UserInfo } from 'os'
import { API } from 'aws-amplify'

function AllUsers(): JSX.Element {
  const [allUsers, setAllUsers] = useState<any>([])

  useEffect(() => {
    API.get('clientapi', '/clients/name', {}).then((clientResponse: any) =>
      setAllUsers(clientResponse)
    )
  }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3} mb={20} height='65vh'>
        <DataTable
          table={{
            columns: dataTableData.columns,
            rows: allUsers,
          }}
        />
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}

export default AllUsers
