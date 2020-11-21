import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationRounded(props) {
  const classes = useStyles();
  const {total_pages, handlePageChange} = props
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    handlePageChange(value)

    // console.log(' value',value)
    
  };

  return (
    <div className={classes.root}>
      <Pagination onChange={handleChange} count={total_pages} variant="outlined" shape="rounded" />
    </div>
  );
}