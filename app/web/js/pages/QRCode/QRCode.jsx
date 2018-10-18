/*
 * huangzongzhe
 * 2018.07.31
 */
import React, {
	Component
} from 'react'
import QRCode from 'qrcode.react'
import { Button } from 'antd-mobile'
import style from './QRCode.scss'

import BackupNotice from '../BackupNotice/BackupNotice'
import clipboard from '../../utils/clipboard'

class QRCodeTemplate extends Component {

	componentDidMount() {
		clipboard('#clipboard-qrcode');
	}

	render() {

		let walletAddress = JSON.parse(localStorage.getItem('lastuse')).address;

		return (
			<div>
				<BackupNotice />
				<p>qrcode</p>
				<QRCode value={walletAddress} />

				<input id="qrcodetext" 
					type="text" 
					className={style.textarea} 
					value={walletAddress}
					readOnly/>

				<p id="qrcodetext">{walletAddress}</p>
				<Button
					onClick={() => {
						let btn = document.getElementById('clipboard-qrcode');
						btn.click();
					}}
                >复制地址</Button>
                <button id="clipboard-qrcode" data-clipboard-target="#qrcodetext" style={{display: 'none'}}>copy</button>
	    	</div>
		);
	}
}

export default QRCodeTemplate