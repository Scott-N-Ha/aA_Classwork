import React from 'react';

import BenchIndex from '../bench/bench_index.jsx';
import BenchMap from './bench_map.jsx';

const Search = ({ benches, fetchBenches }) => (
  <div>
    <BenchIndex benches={benches} fetchBenches={fetchBenches} />
    <BenchMap benches={benches} />
  </div>
)

export default Search;