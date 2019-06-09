Feature: Main Seaarch

    Feature Description Test main search features
    Scenario Outline: Enter and validate 'Term Classes' search text
        Given I click Term Classes tab
        When I enter '<termSearchText>' for term classes field
        Then I can see '<termSearchText>' is entered in term classes field

        Examples:
            | termSearchText |
            | English, Maths |
            | Sports, Music  |

    Scenario Outline: Enter and validate 'All-You-Can Learn Classes' search text
        Given I click All-You-Can Learn Classes tab
        When I enter '<allSearchText>' for all classes field
        Then I can see '<allSearchText>' is entered in all classes field

        Examples:
            | allSearchText               |
            | Football, Badminton, Abacus |
            | Dance, Chess, Piano         |

