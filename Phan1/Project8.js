import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumlator, item) => {
        const group = item.name.last[0].toUpperCase();

        if (accumlator[group]) {
            accumlator[group].data.push(item);
        } else {
            accumlator[group] = {
                title: group,
                data: [item],
            };
        }
        //
        return accumlator;
    }, {});
    //
    const sections = Object.keys(groupedData).map((key) => {
        return groupedData[key];
    });
    //
    return sections.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        return -1;
    });
}

const Project8 = () => {
    return (
        <SafeAreaView>
            <SectionList
                sections={groupPeopleByLastName(PE0PLE)}
                keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                renderSectionHeader={({ section }) => {
                    return (
                        <View style={styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    )
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.name}>
                                {item.name.first} {item.name.last}
                            </Text>
                        </View>
                    );
                }}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}/>
        </SafeAreaView>
    )
}
const PE0PLE = [
    {
        name:{
            title: "MR",
            first: "Minh",
            last: "Tuan"
        },
    },
    {
        name:{
            title: "MR",
            first: "Tuan",
            last: "Anh"
        },
    },
    {
        name:{
            title: "MR",
            first: "Dinh",
            last: "Hoang"
        },
    }
];

export default Project8

const styles = StyleSheet.create({
    row:{
        padding: 10,
        
    },
    name:{
        fontSize: 16
    },
    separator:{
        backgroundColor: "rgba(0,0,0,0.5)",
        height:1,
    },
    sectionHeader:{
        padding:10,
        backgroundColor: "rgb(170, 170, 170)"
    }
    
})