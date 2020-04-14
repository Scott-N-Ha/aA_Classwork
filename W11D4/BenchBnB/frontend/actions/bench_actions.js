import * as BenchAPI from '../util/bench_api_util.js';

// String Consts
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

// Regular Actions
export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
})

// Thunk Actions
export const fetchBenches = () => dispatch => (
  BenchAPI.fetchBenches()
    .then(benches => dispatch(receiveBenches(benches)))
);