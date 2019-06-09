Feature: Advanced Search

    Feature Description Test advanced search features

    Scenario: I click This Weekend button will show this weekend start and end dates
        When I click This Weekend button
        Then I can see this weekend start and end dates
        When I click Next Week button
        Then I can see next week start and end dates
        When I click Next Weekend button
        Then I can see next weekend start and end dates

    Scenario Outline: I select '<location>' and it is selected
        When I select '<location>' from Locations combo box
        Then I can see '<location>' is selected from Locations combo box

        Examples:
            | location |
            | Central  |
            | North    |

    Scenario Outline: I select '<minAge>' and '<maxAge>' and they are selected
        When I select '<minAge>' from min age combo box
        Then I can see '<minAge>' is selected from min age combo box
        When I select '<maxAge>' from max age combo box
        Then I can see '<maxAge>' is selected from max age combo box

        Examples:
            | minAge       | maxAge       |
            | 5 years old  | 10 years old |
            | 10 years old | 20 years old |

    Scenario Outline: I enter '<startDate>' and '<endDate>' and they are entered
        Given I validate '<startDate>' is not after '<endDate>'
        When I enter '<startDate>' and '<endDate>'
        Then I can see '<startDate>' and '<endDate>' are entered

        Examples:
            | startDate   | endDate        |
            | 1 July 2019 | 31 August 2019 |
            | 2 July 2019 | 5 July 2019    |

