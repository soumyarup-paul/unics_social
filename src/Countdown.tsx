import { Box, createMuiTheme, CssBaseline, ThemeProvider, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

export const startTime = new Date('2020-09-28T13:00:00+01:00').getTime();

const startMoment = moment(startTime);

function lpad(n: number) {
	n = Math.max(n, 0);
	return n < 10 ? `0${n}` : String(n);
}

function Countdown() {
	const [n, setN] = useState<number>(0);

	useEffect(() => {
		if (Date.now() >= startTime) {
			window.location.reload();
			return;
		}
		const timeout = setTimeout(() => setN(n + 1), 250);
		return () => clearTimeout(timeout);
	}, [n]);

	const nowMoment = moment(new Date());

	const duration = moment.duration(startMoment.diff(nowMoment));

	return (
		<ThemeProvider theme={createMuiTheme()}>
			<CssBaseline />
			<Box style={{
				backgroundColor: '#520F79',
				background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${require('./assets/backdrop_2.jpg')})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}>
				<Typography variant="h1" style={{
					fontWeight: 'bold',
					background: 'black',
					color: 'white',
					lineHeight: '4rem',
					fontSize: '4rem',
					padding: 16,
					marginBottom: 32
				}}>
					UniCS <span style={{ color: 'gold' }}>KB</span>
				</Typography>
				<Typography variant="h1" style={{
					fontWeight: 'bold',
					background: 'black',
					color: 'white',
					lineHeight: '3rem',
					fontSize: '3rem',
					padding: 16,
					marginBottom: 64
				}}>
					{lpad(duration.hours())}:{lpad(duration.minutes())}:{lpad(duration.seconds())}
				</Typography>
				<a href="https://unicsmcr.com">
					<img src="https://unicsmcr.com/assets/logo.png" alt="UniCS Logo" />
				</a>
			</Box>
		</ThemeProvider>
	);
}

export default Countdown;
