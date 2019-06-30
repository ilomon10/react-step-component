import React, { Component } from 'react'

import Step from 'react-step-component'

import Basic from './Basic'

export default class App extends Component {
  state = {
    data: [
      {
        itemRight: (
          <div>
            <div>Registrasi</div>
            <div>Pemasukan dokumen awal</div>
          </div>
        ),
        itemLeft: (
          <div>
            <div>Front Office</div>
          </div>
        ),
      }, {
        itemRight: (
          <div>
            <div>Verifikasi</div>
            <div>Pengecekan validasi dokumen</div>
          </div>
        ),
        itemLeft: (
          <div>
            <div>Front Office</div>
          </div>
        ),
      }, {
        itemCenter: {
          size: 'sm'
        },
        itemLeft: (
          <div>
            <div>Front Office</div>
          </div>
        ),
      }, {
        itemRight: (
          <div>
            <div>Tanda Tangan</div>
            <div>Tanda tangan pemimpin</div>
          </div>
        ),
        itemLeft: (
          <div>
            <div>Kepala dinas</div>
          </div>
        ),
      }, {
        itemRight: (
          <div>
            <div>Pencetakan dan Penyerahan Dokumen</div>
            <div>Tanda tangan pemimpin</div>
          </div>
        ),
        itemLeft: (
          <div>
            <div>Kepala dinas</div>
          </div>
        ),
      }
    ]
  }
  render() {
    const items = this.state.data.map(({ itemRight, itemCenter, itemLeft }, i) => (
      <Step.Item.Wrapper key={i} end={i >= this.state.data.length - 1}>
        <Step.Item.Left>
          {itemRight}
        </Step.Item.Left>
        <Step.Item.Center size={itemCenter ? itemCenter.size : undefined} />
        <Step.Item.Right>
          {itemLeft}
        </Step.Item.Right>
      </Step.Item.Wrapper>
    ))
    return (
      <div style={{ width: 750, margin: '0 auto', display: 'flex', border: '1px solid orange' }}>
        <Basic />
        <div>
          <Step.List>
            {items}
          </Step.List>
        </div>
      </div>
    )
  }
}
