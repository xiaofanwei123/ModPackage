global.attributes = {}

StartupEvents.registry('attribute', event => {
    global.attributes.IRRADIATED_SPELL_POWER = event.create('irradiated_spell_power', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.IRRADIATED_SPELL_RESISTANCE = event.create('irradiated_spell_resistance', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.CANDY_SPELL_POWER = event.create('candy_spell_power', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.CANDY_SPELL_RESISTANCE = event.create('candy_spell_resistance', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.PRIMITIVE_SPELL_POWER = event.create('primitive_spell_power', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)
    global.attributes.PRIMITIVE_SPELL_RESISTANCE = event.create('primitive_spell_resistance', 'irons_spells_js:spell').setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)

    event.create("text").setDefaultValue(1.0).setMinimumValue(0.0).setMaximumValue(10.0)


})


ForgeModEvents.onEvent('net.minecraftforge.event.entity.EntityAttributeModificationEvent', event => {
    event.types.forEach(type => {
        event.add(type, global.attributes.IRRADIATED_SPELL_POWER.get())
        event.add(type, global.attributes.IRRADIATED_SPELL_RESISTANCE.get())
        event.add(type, global.attributes.CANDY_SPELL_POWER.get())
        event.add(type, global.attributes.CANDY_SPELL_RESISTANCE.get())
        event.add(type, global.attributes.PRIMITIVE_SPELL_POWER.get())
        event.add(type, global.attributes.PRIMITIVE_SPELL_RESISTANCE.get())
    })
})