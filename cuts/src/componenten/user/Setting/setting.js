import React, { Component } from 'react';
import { Icon } from 'antd';
import {
    Link, Navbar, Block, Page,
    NavRight, List, ListItem, Popup
} from 'framework7-react';


class SettingBarberShop extends Component {

    state = {

        popupOpened: false
    }

    componentDidMount() {
        // simulate img loading
    }




    render() {
        return (
            <Page>
                <List>
                    <ListItem
                        title="Theme App"
                        smartSelect
                        smartSelectParams={{ openIn: 'popover' }}
                    >
                        <select name="Theme App" defaultValue={['Grey']} style={{ backgroundColor: 'black' }}>
                            <option value="Grey">Grey</option>
                            <option value="Black">Black</option>
                        </select>
                    </ListItem>
                    <ListItem
                        title="Info"
                        popupOpen='.info-popup'
                    />

                </List>

                <Popup className="info-popup" opened={this.state.popupOpened} onPopupClosed={() => this.setState({ popupOpened: false })}>
                    <Page>
                        <Navbar title="Info" colorTheme='black'>
                            <NavRight>
                                <Link popupClose><Icon type="info-circle" style={{ paddingRight: '20px' }} /></Link>
                            </NavRight>
                        </Navbar>
                        <Block>
                            <p>Here comes popup. You can put here anything, even independent view with its own navigation. Also not, that by default popup looks a bit different on iPhone/iPod and iPad, on iPhone it is fullscreen.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros. Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor. Suspendisse a faucibus lectus.</p>
                            <p>Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero. Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id, pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros, convallis blandit dui sit amet, gravida adipiscing libero.</p>
                        </Block>
                    </Page>
                </Popup>

            </Page>



        )
    }
}

export default SettingBarberShop