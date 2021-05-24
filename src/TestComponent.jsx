import React from 'react';
import {  injectIntl } from 'react-intl';

const TestComponent = ({string})=> <div>{string}</div>

export default injectIntl(TestComponent);