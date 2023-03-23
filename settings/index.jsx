function Colors(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Background Color Settings</Text>}>

        <Text>This will change the clock face background</Text>

        <ColorSelect
          settingsKey="backgroundColor"
          colors={[
            {color: '#535c68'},
            {color: '#2f3640'},
            {color: '#130f40'},
            {color: 'black'},
            {color: '#badc58'},
            {color: '#6ab04c'},
            {color: '#fd79a8'},
            {color: '#b71540'},
            {color: '#f53b57'},
            {color: '#3c40c6'},
            {color: '#0fbcf9'},
            {color: '#ecf0f1'},
            {color: '#fdcb6e'},
            {color: '#4a69bd'},
          ]}
        />
      </Section>


      <Section title={<Text bold align="center">Metrics colors</Text>}>
        <Text>This will reset all customized colors of all metrics.</Text>
        <Button
          label="Reset all colors"
          onClick={() => { props.settingsStorage.setItem('resetAllColors', 'true') }}
          />
      </Section>

      <Section title={<Text bold align="center">Weather</Text>}>
        <Toggle
          settingsKey="imperialUnit"
          label={`Imperial units (Fahrenheit)`}
        />

        <Select
          title="Weather refresh time"
          label={`Refresh time (in minutes)`}
          settingsKey="weatherRefreshTime"
          options={[
            {name:"15"},
            {name:"30"},
            {name:"60"},
            {name:"120"},
            {name:"180"},
          ]}
        />

        <Text bold>
          Manual Location
        </Text>

        <Toggle
          settingsKey="manualLocation"
          label="Use Manual Location"
        />

        <TextInput
          placeholder="FR"
          settingsKey="countryRegion"
          title="Country Region"
        />

        <TextInput
          placeholder="Tour Eiffel - Parc du Champ-de-Mars"
          settingsKey="addressLine"
          title="Address"
        />

        <TextInput
          placeholder="75007"
          settingsKey="postalCode"
          title="Postal Code"
        />

        <TextInput
          placeholder="WA"
          settingsKey="adminDistrict"
          title="Administration District"
        />

        <Button
          label="Update"
          onClick={() => {
            props.settingsStorage.setItem('weatherNotification', 'updating...');
            props.settingsStorage.setItem('updateManualLocation', 'true');
          }}
        />

        <Text>
          {`${typeof props.settingsStorage.getItem('weatherNotification') === 'string' ?
            props.settingsStorage.getItem('weatherNotification') : '-'}`}
        </Text>

      </Section>

      <Section title={<Text bold align="center">Distance</Text>}>
        <Text>
          Activate this option to see distance in miles.
        </Text>

        <Toggle
          label={`Imperial units (miles)`}
          settingsKey="distanceImperialUnit"
        />
      </Section>

      <Section title={<Text bold align="center">Lock</Text>}>
        <Text>
          Activate this option to lock the clock face, so any interaction will be discarded.
          This prevent to accidentally change the user interface.
        </Text>

        <Toggle
          label={`Lock the clock face`}
          settingsKey="lockUI"
        />
      </Section>

      <Section title={<Text bold align="center">Panic Zone</Text>}>
        <Text>
          If the clock face become unstable, you're at the right place.
        </Text>

        <Button
          label="Reset Metrics"
          onClick={() => { props.settingsStorage.setItem('resetMetrics', 'true') }}
        />
      </Section>    
    </Page>
  );
}

registerSettingsPage(Colors);

// To change B&W colors, auto rainbow, colored
