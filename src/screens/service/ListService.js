import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { GlobalInput } from '../../components/shared/GlobalInput';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { actionGetAllService } from '../../redux/actions/ServiceActions';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

class ListService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            loading: false,
            refresh: false
        }
    }

    componentDidMount = async () => {
        await this.setState({
            loading: true
        })
        this.props.getAllServices({
            token: this.props.propsLogin.session.account.remember_token,
            page: 0
        })
    }

    componentWillReceiveProps = async (nextProps) => {
        await this.setState({
            loading: false,
            refresh: !this.state.refresh
        })
    }

    render() {
        return (
            <View>
                <View style={{ padding: 10, width: '100%' }}>
                    <GlobalInput ph="Buscar" change={text => this.setState({ name: text })}
                        value={this.state.search} />
                </View>
                <ScrollView style={{ height: '100%' }}>
                    <View>
                        {
                            undefined !== this.props.propsService.services &&
                            <FlatList
                                data={this.props.propsService.services.data}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={this.state.refresh}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddEditService', { service: item })}>
                                        <View style={styles.viewList}>
                                            <View style={{ width: '90%' }}>
                                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ width: '60%' }}>{item.description}</Text>
                                                    <Text style={styles.textPrice}>${item.price}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.iconNext}>
                                                <Icon size={22} name="ios-arrow-forward" />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                } />
                        }
                    </View>
                </ScrollView>
                <LoadingSpinner visible={this.state.loading} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewList: {
        borderTopWidth: 1, borderBottomWidth: 1, padding: 10,
        flexDirection: 'row', marginBottom: 5
    },
    textPrice: {
        width: '40%', textAlign: 'right'
    },
    iconNext: {
        width: '10%', justifyContent: 'center', alignItems: 'flex-end'
    }
})

const mapStateToProps = state => ({
    propsLogin: state.reducerLogin,
    propsService: state.reducerService
})

const mapDispatchToProps = dispatch => ({
    getAllServices: (data) => {
        dispatch(actionGetAllService(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListService);
