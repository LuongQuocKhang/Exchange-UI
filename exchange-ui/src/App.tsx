import './App.css'
import { LimitOrder } from './features/trading/limit/LimitOrder'
import { TradingChart } from './features/chart/TradingChart'
import { OrderTable } from './features/order/OrderTable';

import Grid2 from '@mui/material/Grid2';
function App() {
  return (
    <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <TradingChart />
        </Grid2>
        <Grid2 size={4}>
          <LimitOrder />
        </Grid2>
        <Grid2 size={12}>
          <OrderTable />
        </Grid2>
      </Grid2>
  );
}

export default App;
