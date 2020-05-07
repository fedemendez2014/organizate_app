import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import { GlobalStyles, GlobalModal, GlobalSecondColor } from '../../Styles';
import { LogoBackground } from '../../components/shared/LogoBackground';
import ViewForDay from '../../components/home/ViewForDay';
import ViewForWeek from '../../components/home/ViewForWeek';
import GlobalPicker from '../../components/shared/GlobalPicker';
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewFor: 0,
            viewType: [
                {
                    index: 0,
                    label: 'DIARIA'
                },
                {
                    index: 1,
                    label: 'SEMANAL'
                }
            ],
            detailsSelect: null
        }
    }

    render() {
        return (
            <View style={GlobalStyles.ViewBackground}>
                <LogoBackground />
                <GlobalPicker items={this.state.viewType.map(element => element.label)}
                    title="Ver de forma" value={this.state.viewType[this.state.viewFor].label}
                    change={(value, index) => this.setState({ viewFor: index })} />
                {
                    0 === this.state.viewFor ? // 0 = DIA | 1 = SEMANA
                        <ViewForDay showDetails={(item) => { this.setState({ detailsSelect: item }) }}
                            navigation={this.props.navigation} />
                        : <ViewForWeek />
                }
                {
                    this.state.detailsSelect !== null &&
                    <View style={GlobalModal.viewContentPosition}>
                        <View style={GlobalModal.viewContent}>
                            <LogoBackground />
                            <View style={GlobalModal.viewHead}>
                                <Text style={GlobalModal.headTitle}>
                                    Detalles reserva #{this.state.detailsSelect.reservation.id}
                                </Text>
                                <TouchableOpacity style={[GlobalModal.buttonRight, { flexDirection: 'row' }]}
                                    onPress={() => this.setState({ detailsSelect: null })}>
                                    <Icon name="md-close" size={26} color={GlobalSecondColor} />
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{ marginTop: 10 }}>
                                <View style={styles.cardDetailsView}>
                                    <View style={{ marginBottom: 10 }}>
                                        <View style={styles.cardDetailsHead}>
                                            <Text style={styles.cardDetailsTitle}>
                                                Reserva
                                            </Text>
                                        </View>
                                        <View style={styles.cardDetailsData}>
                                            <DataCard title="Fecha:" details="viernes, 22 de abril de 2020" />
                                            <DataCard title="Hora:" details="22:00 hs" />
                                        </View>
                                    </View>
                                    <View style={{ marginBottom: 10 }}>
                                        <View style={styles.cardDetailsHead}>
                                            <Text style={styles.cardDetailsTitle}>
                                                Cliente
                                            </Text>
                                        </View>
                                        <View style={styles.cardDetailsData}>
                                            <DataCard title="Nombre:" details="Federico Mendez" />
                                            <DataCard title="Email:" details="fedemendez2014@icloud.com" />
                                            <DataCard title="Dirección:"
                                                details="Defensa 1827, apto 221, Montevideo" />
                                            <DataCard title="Teléfono:" details="" />
                                            <DataCard title="Celular:" details="098694456" />
                                            <DataCard title="Observaciónes:" details="Cliente muy bueno" />
                                        </View>
                                    </View>
                                    <View style={styles.cardDetailsHead}>
                                        <Text style={styles.cardDetailsTitle}>
                                            Servicio
                                        </Text>
                                    </View>
                                    <View style={styles.cardDetailsData}>
                                        <DataCard title="Nombre:" details="Corte de pelo clasico" />
                                        <DataCard title="Precio:" details="$250" />
                                        <DataCard title="Descripción:" details="Corte normal" />
                                        <DataCard title="Observaciónes:" details="Corte de 15 minutos" />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const DataCard = (props) => (
    props.details !== '' ?
        <View style={styles.clientDataField}>
            <Text style={styles.clientDataTitle}>
                {props.title}
            </Text>
            <Text style={styles.clienteDataDetails}>
                {props.details}
            </Text>
        </View> : null

)

const styles = StyleSheet.create(
    {
        clientDataField: {
            flexDirection: 'row', color: GlobalSecondColor
        },
        clientDataTitle: {
            color: GlobalSecondColor, fontWeight: 'bold'
        },
        clienteDataDetails: {
            color: GlobalSecondColor, marginBottom: 10,
            marginLeft: 5, flex: 1
        },
        cardDetailsView: {
            backgroundColor: 'white', paddingTop: 10, marginLeft: 10,
            marginRight: 10, borderRadius: 5, shadowColor: "#000",
            shadowOpacity: 0.50, shadowRadius: 4, elevation: 5,
            shadowOffset: {
                width: 0,
                height: 2,
            }
        },
        cardDetailsHead: {
            borderBottomColor: GlobalSecondColor, borderBottomWidth: 0.5
        },
        cardDetailsTitle: {
            textAlign: 'left', fontSize: 16, paddingStart: 10,
            color: GlobalSecondColor, fontWeight: 'bold'
        },
        cardDetailsData: {
            padding: 10, paddingBottom: 0
        }
    });