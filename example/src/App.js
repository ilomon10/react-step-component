import React, { Component } from 'react'

import {List, Item, ItemLeft, ItemRight, ItemCenter} from 'react-step-component'

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
    const items = this.state.data.map(({itemRight, itemCenter, itemLeft}, i) => (
      <Item key={i} end={i >= this.state.data.length - 1}>
        <ItemLeft>
          {itemRight}
        </ItemLeft>
        <ItemCenter size={itemCenter ? itemCenter.size : undefined }/>
        <ItemRight>
          {itemLeft}
        </ItemRight>
      </Item>
    ))
    return (
      <div>
        <List>
          {items}
        </List>
      </div>
    )
  }
}
