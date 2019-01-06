/*
 * Copyright 2018 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

/**
 * @module Etcher.Components.FlashAnother
 */

const angular = require('angular')
const { react2angular } = require('react2angular')

const MODULE_NAME = 'Etcher.Components.FlashAnother'
const FlashAnother = angular.module(MODULE_NAME, [])

FlashAnother.component(
  'flashAnother',
  react2angular(require('./flash-another.jsx'))
)

module.exports = MODULE_NAME
